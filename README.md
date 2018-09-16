# Assignment 3 SolarSystem

Assignment No 3 for the computer graphics course. Using three.js, create a solar system

Rubric:

- Create 8 planets (and pluto), with their respective moons, the sun, and the asteroid field. *Complete*
- The planets and moons can be created as spheres.
- EXTRA: For the asteroids, and some of the moons, investigate how to load the geometry from an obj or json file.
- Planets and moons must have their own rotation. *Complete*
- The moons have to rotate around the planets, and the planets have to rotate around the sun. *Complete*
- Planets, and their orbits, must have scale that showcases the differences between the planets. *Complete*
- Draw the orbit that each planet follows. *Complete*
- Each element must have its own materials, with textures, and normal or bump maps. *Complete*
- Most textures can be found here: http://planetpixelemporium.com/
- The rotation of the system has to be controlled with the left mouse button, while the panning has to be controlled with the right mouse button. Scale of the scene can be controlled as in the examples. *Incomplete*

**NOTES**

1. Added a function to prevent a context menu from appearing when right clicking the canvas.
2. Be careful when adding asteroids. If you add the geometry in the for, you end up creating too many geometries and can lead to the simulation to slow the system down.
3. The sun does not need to rotate.
4. Missing the rotation around the X-axis.

**Grade: 95**