#version 330 core

uniform vec3 mesh_color;

out vec4 out_color;

void main() {
  out_color = vec4(mesh_color, 1.0);
}