## Unit Clarity

To maintain consistency and prevent ambiguity across the project, all contributions must use explicit, well-defined physical units. This applies to variable names, function parameters, documentation, and simulation logic.

### ✔️ When adding new fields or calculations:

- Always state the unit in the interface or comment.
- Use SI units unless there is a strong reason not to.
- Avoid mixing units within the same calculation.
- If the meaning of a unit could be misunderstood, provide a short explanation.

### ✔️ When submitting a PR:

- Ensure all values have documented units.
- If a function returns a computed physical value, specify the output unit.
- If a new concept introduces a unit not currently in the - project, add it to the table below.
- Maintaining unit clarity is crucial for accurate simulation and prevents errors caused by misunderstandings (e.g., mAh vs Ah, cm vs m).

| Meaning / Unit               | Code Abbreviation | Example Variable Name |
| ---------------------------- | ----------------- | --------------------- |
| Volt                         | `v`               | `voltage_v`           |
| Ampere                       | `a`               | `current_a`           |
| Milliamp-hour                | `mah`             | `capacity_mah`        |
| Amp-hour                     | `ah`              | `capacity_ah`         |
| Watt                         | `w`               | `power_w`             |
| Watt-hour                    | `wh`              | `energy_wh`           |
| Watt-hour per kilogram       | `whkg`            | `energy_density_whkg` |
| Kilogram                     | `kg`              | `mass_kg`             |
| Gram                         | `g`               | `weight_g`            |
| Meter                        | `m`               | `distance_m`          |
| Centimeter                   | `cm`              | `arm_length_cm`       |
| Meter per second             | `mps`             | `velocity_mps`        |
| Radian per second            | `rads`            | `omega_rads`          |
| Newton                       | `n`               | `force_n`             |
| Newton-meter                 | `nm`              | `torque_nm`           |
| Joule                        | `j`               | `energy_j`            |
| Degree                       | `deg`             | `angle_deg`           |
| Radian                       | `rad`             | `angle_rad`           |
| Hertz                        | `hz`              | `frequency_hz`        |
| Cell count (LiPo series)     | `s`               | `cells_s`             |
| Cell count (LiPo parallel)   | `p`               | `cells_p`             |
| C-rating (battery discharge) | `c`               | `max_discharge_c`     |

## Validators Requirements

Error and warning codes should follow the following conventions.

- Error Codes should start with `ERROR`
- Warning Codes should start with `WARNING`

| Error/Warning Codes Suffix | Meaning                                     |
| -------------------------- | ------------------------------------------- |
| `_OUT_OF_RANGE`            | The provided value is not in expected range |
