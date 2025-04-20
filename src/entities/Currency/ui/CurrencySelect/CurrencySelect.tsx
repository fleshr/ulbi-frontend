import { Select } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { currencies } from "../../constants/currencies";

interface CurrencySelectProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const CurrencySelect = memo(function CurrencySelect({
  value,
  onChange,
  disabled = false,
}: CurrencySelectProps) {
  const { t } = useTranslation("translation", { keyPrefix: "CurrencySelect" });

  return (
    <Select
      disabled={disabled}
      label={t("Валюта")}
      value={value}
      onChange={onChange}
      options={currencies}
    />
  );
});
