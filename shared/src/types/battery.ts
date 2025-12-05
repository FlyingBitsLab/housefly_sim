export namespace Battery {
  export const LIPO_VOLTAGE_PER_CELL_V = 3.7;
  export const LIPO_VOLTAGE_PER_CELL_FULLY_CHARGED_V = 4.2;

  export interface IConfig {
    cells_series_count: number;
    cells_parallel_count: number;
    c_rating: number;
    capacity_mAh: number;
    energy_density_whkg: number;
  }

  export const calculate_nominal_voltage_V = (
    config: Pick<Battery.IConfig, "cells_series_count">
  ): number => {
    return config.cells_series_count * LIPO_VOLTAGE_PER_CELL_V;
  };

  /**
   * Calculates the maximum safe continuous discharge current of a battery (in Amps).
   *
   * C-rating is a unitless multiplier that expresses how many times per hour
   * the battery can safely discharge its entire capacity. When multiplied by
   * the battery's capacity in amp-hours (Ah), the result is a current (A):
   *
   *    max_current_A = c_rating × capacity_Ah
   *
   * The output is in amperes (A), not amp-hours (Ah), because the formula
   * describes a *rate of discharge* (how fast current can flow), not how much
   * energy the battery can store.
   */
  export const calculate_max_safe_continues_current_A = (
    config: Pick<Battery.IConfig, "c_rating" | "capacity_mAh">
  ): number => {
    const { c_rating, capacity_mAh } = config;
    const capacityAh = capacity_mAh / 1000;
    return c_rating * capacityAh;
  };
}
