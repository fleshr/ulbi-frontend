import { Select } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { countries } from "../../constants/countries";

interface CountrySelectProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const CountrySelect = memo(function CountrySelect({
  value,
  onChange,
  disabled = false,
}: CountrySelectProps) {
  const { t } = useTranslation("translation", { keyPrefix: "CountrySelect" });

  return (
    <Select
      disabled={disabled}
      label={t("Страна")}
      value={value}
      onChange={onChange}
      options={countries}
    />
  );
});
