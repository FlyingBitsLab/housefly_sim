# Battery Model Overview

This document describes the battery configuration model used in Housefly Sim.
It explains how LiPo battery characteristics are represented and how each configuration value affects the simulation.

## LiPo Cell Voltage Constants

> LIPO_VOLTAGE_PER_CELL = 3.7

The nominal (average) voltage of a single LiPo cell during typical discharge.

- A LiPo battery is made of multiple cells.
- Each cell stabilizes around 3.7 V during most of its discharge curve.
- This value is used to estimate nominal pack voltage.

> LIPO_VOLTAGE_PER_CELL_FULLY_CHARGED = 4.2

The maximum safe voltage of a fully charged LiPo cell.

- Charging above 4.2 V is dangerous and shortens battery life.
- A fully charged 4S battery has: 4 × 4.2 = 16.8 V

## Battery Configuration

The Config interface defines the physical and electrical properties of a LiPo pack.

### Serial Cells

Number of cells connected in series (S). Determines the battery voltage. More cells in series → higher voltage → higher motor RPM potential.

Example:

- 3S → Nominal 11.1 V

### Parallel Cells

Number of parallel cell groups (P). Increases capacity and maximum current. A “3S2P” pack means: 3 cells in series 2 identical branches in parallel. Higher parallel count means:

- Higher energy storage
- Lower strain per cell
- Higher continuous current capability

### Series VS Parallel

LiPo battery packs are built by connecting individual 3.7V cells in series and/or parallel to achieve the desired voltage and capacity. When cells are connected in series, their voltages add up, allowing the battery to supply higher voltage needed to power components like ESCs and motors; for example, a 3-cell series (3S) pack delivers 11.1V nominal. In contrast, when cells are connected in parallel, the voltage remains the same as a single cell (3.7V), but the capacity (mAh) increases, which extends the flight time. Real-world drone batteries typically use a series-parallel combination (e.g., 3S2P) to provide both adequate voltage and sufficient current capacity. Purely parallel configurations like 2P are impractical for drones, as the voltage would be too low to operate critical systems.

### Capacity

Battery capacity is the amount of electric charge a battery can store, measured in milliamp-hours (mAh), and it works like the “size of a fuel tank” for a drone. A higher capacity means the battery can deliver a certain current for a longer time—for example, a 2200 mAh battery can provide 2.2 A for about one hour or 11 A for roughly 12 minutes. Capacity alone doesn’t define total energy; it combines with voltage to determine how long and how strongly the drone can be powered. Larger capacity increases flight time but also adds weight, so drone design always involves balancing energy and mass for efficient performance.

### C-rating

C-rating describes how quickly a battery can safely deliver its stored energy, similar to how fast you can pour fuel out of a tank without damaging it. It is a multiplier used with the battery’s capacity (in Ah) to calculate the maximum safe continuous current the battery can supply. For example, a 2000 mAh (2.0 Ah) battery with a 50C rating can deliver up to 2.0 × 50 = 100 amps continuously. A higher C-rating means the battery can provide more current with less voltage sag and less heat, making it suitable for high-power applications like drones. Lower C-ratings limit how hard you can push the motors before the battery becomes stressed or unsafe.

### Discharge Rate

The discharge rate describes how much current the drone is **actually** drawing from the battery during operation. Unlike the C-rating—which defines the battery’s maximum safe output—the discharge rate represents the real, moment-to-moment load placed on the battery by the motors and electronics. Higher discharge rates drain the battery faster, increase voltage sag, and generate more heat, while lower discharge rates allow longer, more stable flights. In short, the discharge rate reflects how hard the battery is currently being used, not how much it can deliver.

### Energy Density

Energy density is a measure of how much energy a battery can store per unit of mass, expressed in Watt-hours per kilogram (Wh/kg). It tells you how “light” or “heavy” the stored energy is. A battery with higher energy density can hold more energy while weighing less, which is extremely important for drones because weight directly reduces flight time and performance. For example, a LiPo battery with an energy density of 180 Wh/kg can store 180 watt-hours of energy for every kilogram of battery mass.

### Nominal Battery Voltage

Nominal battery voltage is the average operating voltage of a battery during most of its discharge cycle. For LiPo cells, this value is 3.7 volts per cell. It is not the fully charged voltage (4.2 V) or the empty voltage (around 3.3 V), but rather the midpoint voltage where the battery spends most of its usable time.

### Pure parallel LiPo is not an option for drones

In practice, a pure parallel LiPo battery configuration like 2P (without any cells in series) is rarely used in drones because it provides only 3.7V nominal, which is far too low to power most ESCs and motors. While parallel cells do increase capacity (and thus flight time), they do not increase voltage — and voltage is what motors and ESCs primarily need to function. That's why real-world drone batteries are almost always a combination of series and parallel (e.g., 3S1P, 4S2P), where series connections provide the necessary voltage and parallel connections boost capacity. So yes, 2P exists in theory, but it’s just not fly-worthy in the drone world.
