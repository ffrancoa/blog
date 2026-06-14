---
author: Francesco Franco
pubDatetime: 2024-01-03T20:40:08Z
modDatetime: 2024-01-08T18:59:05Z
title: On The One-Dimensional Wave Equation
featured: true
draft: false
tags:
  - soil-dynamics
description: An exploration of the fundamentals of seismic response analysis.
---

I believe knowing the derivation of the wave equation is fundamental to understanding 1D
seismic site response analysis. Since we are in a one-dimensional context, let us assume
a pulse propagating through a bar.

If the pulse is a shear wave $\tau(x)$, it is expected that, at each end of the element
$dx$ located at a distance $x_i$ from the origin, shear stresses $\tau(x_i)$ and
$\tau(x_i + dx)$ arrive.

Applying Newton's second law in the $y$ direction:

$$
\sum F_y = m \cdot a_y
$$

$$
A \cdot \left[ \tau(x_i + dx) - \tau(x_i) \right] = (\rho \cdot A \cdot dx) \cdot a_y
$$

Where $A$ is the cross-sectional area of element $dx$ and, therefore, $A \cdot dx$ is
the volume of that differential element. Canceling $A$ and applying the chain rule:

$$
\left[ \tau(x_i) + \frac{\partial \tau}{\partial x} dx - \tau(x_i) \right] = \rho \cdot dx \cdot a_y
$$

$$
\frac{\partial \tau}{\partial x} = \rho \cdot a_y \tag{1}
$$

Assuming a linearly elastic bar, from Hooke's law in shear we know that:

$$
\tau = G \cdot \gamma \tag{i}
$$

And we also know that, given the direction in which shear is applied in the second
figure:

$$
\gamma = \frac{dy}{dx} \tag{ii}
$$

Where $\gamma$ is the shear strain. Differentiating $(\text{i})$ with respect to $x$ and
substituting $(\text{ii})$:

$$
\frac{\partial \tau}{\partial x} = G \cdot \frac{\partial \gamma}{\partial x}
$$

$$
\frac{\partial \tau}{\partial x} = G \cdot \frac{\partial^2 y}{\partial x^2} \tag{iii}
$$

Finally, substituting $(iii)$ into $(1)$ and using differential notation for
acceleration $a_y$, we obtain the well-known one-dimensional wave equation:

$$
G \cdot \frac{\partial^2 y}{\partial x^2} = \rho \cdot a_y = \rho \cdot \frac{\partial^2 y}{\partial t^2}
$$

$$
\frac{\partial^2 y}{\partial t^2} = \left( \frac{G}{\rho} \right) \cdot \frac{\partial^2 y}{\partial x^2}
$$

$$
\therefore \frac{\partial^2 y}{\partial t^2} = {V_s}^2 \cdot \frac{\partial^2 y}{\partial x^2}
$$

Where the constant ${V_s}^2$ is referred to as the **shear wave velocity**.

```rust
fn compute_vs(shear_modulus: f64, density: f64) -> f64 {
    (shear_modulus / density).sqrt()
}
```
