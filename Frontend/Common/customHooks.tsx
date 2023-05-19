import {useEffect, useState } from 'react'
import { DarkMode, FontSize, FontSizeLarge, LightMode } from './GlobalStyles';

export const useIsDark = (props: { isDark: boolean }) =>  {
    const [styles, setStyles] = useState(props.isDark ? DarkMode : LightMode);
    useEffect(() => {
        if (props.isDark) {
            setStyles(DarkMode);
        } else {
            setStyles(LightMode)
        }
    }, [props.isDark])
  return styles
}

export const useIsLarge = (props: { isLarge: boolean }) =>  {
    const [fontSizes, setFontSizes] = useState(props.isLarge ? FontSizeLarge : FontSize);
    useEffect(() => {
        if (props.isLarge) {
            setFontSizes(FontSizeLarge);
        } else {
            setFontSizes(FontSize)
        }
    }, [props.isLarge])
  return fontSizes
}

