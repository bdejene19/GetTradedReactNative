import {useEffect, useState } from 'react'
import { useAppSelector } from '../ReduxStore/slices/hooks';
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

export const useIsLarge = () =>  {
    const { isLarge } = useAppSelector((state) => ({
        isLarge: state.settingStore.isLarge
    }))
    const [fontSizes, setFontSizes] = useState(isLarge ? FontSizeLarge : FontSize);
    useEffect(() => {
        if (isLarge) {
            setFontSizes(FontSizeLarge);
        } else {
            setFontSizes(FontSize)
        }
    }, [isLarge])
  return fontSizes
}

