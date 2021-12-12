---
title: Global Functions
category: angelscript
tags:
  - api
  - reference
  - chaos
  - hammer
toc: true
toc_sticky: true
---

This page outlines the various Chaos Hammer AngelScript global functions.

## Global Functions

### `FindMaterial`

```as
Material@ FindMaterial(const string&in name)

```

### `GetDefaultTextureName`

```as
string GetDefaultTextureName()
```

### `abs`

```as
float abs(float)
```

### `acos`

```as
float acos(float)
```

### `asin`

```as
float asin(float)
```

### `atan`

```as
float atan(float)
```

### `atan2`

```as
float atan2(float, float)
```

### `ceil`

```as
float ceil(float)
```

### `closeTo`

```as
bool closeTo(float, float, float = 0.00001f)

bool closeTo(double, double, double = 0.0000000001)
```

### `cos`

```as
float cos(float)
```

### `cosh`

```as
float cosh(float)
```

### `floor`

```as
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
