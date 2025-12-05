export namespace Validators {
  export const VALIDATION_RESULTS = {};

  export type BatteryWarningCodes = "WARNING_BATTERY_VOLTAGE_OUT_OF_RANGE";
  export type BatteryErrorCodes = "ERROR_BATTERY_VOLTAGE_OUT_OF_RANGE";

  export type WarningCodes = BatteryWarningCodes;
  export type ErrorCodes = BatteryErrorCodes;
  export type Source = "BATTERY" | "AIRFRAME";

  export interface IValidationResult<T = WarningCodes | ErrorCodes> {
    code: T;
    explain: string;
    solutions?: string[];
    sources: Source[];
  }

  export interface IValidationResults {
    warning: Array<IValidationResult<WarningCodes>>;
    errors: Array<IValidationResult<ErrorCodes>>;
  }
}
