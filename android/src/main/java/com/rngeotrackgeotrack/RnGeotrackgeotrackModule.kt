package com.rngeotrackgeotrack

import com.facebook.react.bridge.ReactApplicationContext

class RnGeotrackgeotrackModule(reactContext: ReactApplicationContext) :
  NativeRnGeotrackgeotrackSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = NativeRnGeotrackgeotrackSpec.NAME
  }
}
