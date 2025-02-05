import { IValidateOptions } from "@/modules/ActionsBudget/types";
import { Rule } from "antd/es/form";

export const validateMessages: IValidateOptions = {
  required: "Поле обязательное для заполнения",
  number: {
    range: "Введите числов в диапозоне от ${min} до ${max}",
  },
  types: {
    number: "Значение должно быть числом",
  },
};

export const validateRules: Rule = {
  type: "number",
  min: 0,
  max: 1000000,
};
