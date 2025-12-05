export namespace Airframe {
  export type TFuselageConfiguration =
    | "QUAD_PLUS"
    | "QUAD_X"
    | "HEXA_PLUS"
    | "HEXA_X"
    | "Y6"
    | "OCTO_PLUS"
    | "OCTO_X"
    | "X8";

  export interface IConfig {
    fuselageConfiguration: TFuselageConfiguration;
    /**
     * The distance from the center of the drone to the center of each motor
     */
    radius_cm: number;
    has_duct: boolean;
    has_landing_gears: boolean;
  }
}
