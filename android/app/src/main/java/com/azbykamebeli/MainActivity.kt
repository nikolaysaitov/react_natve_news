package ru.testapp.android

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import android.content.res.Configuration;
class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "testapp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
      when (resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) {
          Configuration.UI_MODE_NIGHT_YES -> setTheme(R.style.DarkTheme)
          Configuration.UI_MODE_NIGHT_NO -> setTheme(R.style.LightTheme)
          else -> setTheme(R.style.LightTheme)
      }

      SplashScreen.show(this)
      super.onCreate(null)
  }
}
