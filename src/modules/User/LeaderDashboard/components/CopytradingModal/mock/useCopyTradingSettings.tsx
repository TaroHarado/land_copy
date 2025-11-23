import autoIcon from "@/public/icons/falling-man.svg";
import fuelIcon from "@/public/icons/fuel.svg";
import { IUseCopyTradingForm } from "@/src/modules/User/LeaderDashboard/hooks/useCopyTradingForm";
import { formatNumberInput } from "@/src/shared/functions/format/input/formatKey";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ChangeEvent, JSX, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CopyTradeButton, CopyTradingInput } from "./components/index";

export interface CopyTradingSettingsMock {
  id: number;
  name: string | number;
  icon: string | StaticImport;
  settings: {
    name: string;
    components: {
      firstComponent: JSX.Element;
      secondComponent: JSX.Element;
    }[];
  };
}

export const useCopyTradingSettings = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    watch,
    setValue,
    register,
    formState: { errors },
    setError,
  } = useFormContext<IUseCopyTradingForm>();

  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement>,
    key: "slippage_bps" | "priority_fee_gwei",
  ) => {
    const value = e.target.value;
    if (value === "") {
      setValue(key, "");
      setError(key, { message: "" });
    } else {
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        setValue(key, numValue.toString() || "");
      }
    }
  };

  const copyTradingSettings: CopyTradingSettingsMock[] = [
    {
      id: 1,
      name: watch("slippage_bps") === "" ? "Auto" : watch("slippage_bps"),
      icon: autoIcon,
      settings: {
        name: "Slippage",
        components: [
          {
            firstComponent: (
              <CopyTradeButton
                text={"Auto"}
                isActive={watch("slippage_bps") === ""}
                disabled={watch("slippage_bps") === ""}
                onClick={() => {
                  setValue("slippage_bps", "");
                  setError("slippage_bps", { message: "" });
                }}
              />
            ),
            secondComponent: (
              <CopyTradingInput
                value={
                  watch("slippage_bps") !== "" ? watch("slippage_bps") : ""
                }
                isActive={watch("slippage_bps") !== ""}
                placeholder="Custom %"
                error={errors.slippage_bps?.message as string}
                onKeyDown={formatNumberInput}
                {...register("slippage_bps", {
                  onChange: (e) => {
                    onChangeValue(e, "slippage_bps");
                  },
                  max: {
                    value: 100,
                    message: "Maximum value is 100",
                  },
                })}
              />
            ),
          },
        ],
      },
    },
    {
      id: 2,
      name:
        watch("priority_fee_gwei") === "" ? "Auto" : watch("priority_fee_gwei"),
      icon: fuelIcon,
      settings: {
        name: "Priority Fee(POL)",
        components: [
          {
            firstComponent: (
              <CopyTradeButton
                text={"Auto 0.0282"}
                isActive={watch("priority_fee_gwei") === ""}
                disabled={watch("priority_fee_gwei") === ""}
                onClick={() => {
                  setValue("priority_fee_gwei", "");
                  setError("priority_fee_gwei", { message: "" });
                }}
              />
            ),
            secondComponent: (
              <CopyTradingInput
                value={
                  watch("priority_fee_gwei") !== ""
                    ? watch("priority_fee_gwei")
                    : ""
                }
                isActive={watch("priority_fee_gwei") !== ""}
                placeholder="Custom %"
                error={errors.priority_fee_gwei?.message as string}
                onKeyDown={formatNumberInput}
                {...register("priority_fee_gwei", {
                  onChange: (e) => {
                    onChangeValue(e, "priority_fee_gwei");
                  },
                  max: {
                    value: 15,
                    message: "Maximum value is 15",
                  },
                })}
              />
            ),
          },
        ],
      },
    },
  ];

  return { copyTradingSettings, setOpenMenu, openMenu };
};
