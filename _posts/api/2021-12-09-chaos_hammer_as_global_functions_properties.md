---
title: Chaos Hammer AngelScript Global Functions and Properties
category: api
tags:
  - api
  - reference
  - chaos
  - hammer
---

This page outlines the various Chaos Hammer AngelScript global functions and properties.

# Table of Contents

- [Global Functions](#global-functions)
  - [`FindMaterial`](#findmaterial)
  - [`GetDefaultTextureName`](#getdefaulttexturename)
  - [`abs`](#abs)
  - [`acos`](#acos)
  - [`asin`](#asin)
  - [`atan`](#atan)
  - [`atan2`](#atan2)
  - [`ceil`](#ceil)
  - [`closeTo`](#closeto)
  - [`cos`](#cos)
  - [`cosh`](#cosh)
  - [`floor`](#floor)
  - [`fpFromIEEE`](#fpfromieee)
  - [`fpToIEEE`](#fptoieee)
  - [`fraction`](#fraction)
  - [`getExceptionInfo`](#getexceptioninfo)
  - [`join`](#join)
  - [`log`](#log)
  - [`log10`](#log10)
  - [`pow`](#pow)
  - [`print`](#print)
  - [`rint`](#rint)
  - [`sin`](#sin)
  - [`sinh`](#sinh)
  - [`sqrt`](#sqrt)
  - [`tan`](#tan)
  - [`tanh`](#tanh)
  - [`throw`](#throw)
- [Global Properties](#global-properties)
  - [`vec3_angle`](#vec3_angle)
  - [`vec3_invalid`](#vec3_invalid)
  - [`vec3_origin`](#vec3_origin)
  - [`vec4_origin`](#vec4_origin)

## Global Functions

### `FindMaterial`

```cpp
Material@ FindMaterial(const string&in name)

```

### `GetDefaultTextureName`

```cpp
string GetDefaultTextureName()
```

### `abs`

```cpp
float abs(float)
```

### `acos`

```cpp
float acos(float)
```

### `asin`

```cpp
float asin(float)
```

### `atan`

```cpp
float atan(float)
```

### `atan2`

```cpp
float atan2(float, float)
```

### `ceil`

```cpp
float ceil(float)
```

### `closeTo`

```cpp
bool closeTo(float, float, float = 0.00001f)

bool closeTo(double, double, double = 0.0000000001)
```

### `cos`

```cpp
float cos(float)
```

### `cosh`

```cpp
float cosh(float)
```

### `floor`

```cpp
float floor(float)
```


### `fpFromIEEE`

```cpp
float fpFromIEEE(uint)

double fpFromIEEE(uint64)
```

### `fpToIEEE`

```cpp
uint fpToIEEE(float)

uint64 fpToIEEE(double)
```

### `fraction`

```cpp
float fraction(float)
```

### `getExceptionInfo`

```cpp
string getExceptionInfo()
```

### `join`

```cpp
string join(const string[]&in, const string&in)
```

### `log`

```cpp
float log(float)
```

### `log10`

```cpp
float log10(float)
```

### `pow`

```cpp
float pow(float, float)
```

### `print`

```cpp
void print(const string&in)
```

### `rint`

```cpp
float rint(float)
```

### `sin`

```cpp
float sin(float)
```

### `sinh`

```cpp
float sinh(float)
```

### `sqrt`

```cpp
float sqrt(float)
```

### `tan`

```cpp
float tan(float)
```

### `tanh`

```cpp
float tanh(float)
```

### `throw`

```cpp
void throw(const string&in)
```

## Global Properties

### `vec3_angle`

```cpp
const QAngle vec3_angle
```

### `vec3_invalid`

```cpp
const Vector vec3_invalid
```
 
### `vec3_origin`

```cpp
const Vector vec3_origin
```

### `vec4_origin`

```cpp
const Vector4D vec4_origin
```
