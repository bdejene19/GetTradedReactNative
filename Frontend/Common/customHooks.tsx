import {useEffect, useState } from 'react'
import { useAppSelector } from '../ReduxStore/slices/hooks';
import { TextResources } from './GlobalDeclarations';
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

export const useLogin = () => {
    
}

export const useContractorTypeBoard = (contractorType: string) => {
const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.JOBS}/${contractorType}`).then(res => res.json()).then(res => {
      console.log('contractor res: ', res)
      if (res) {
        setJobs(res);
      }
    }).catch(err => console.log(err))
  }, [])

  return jobs;
}

export const useUserThreads = (userID: number | string) => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        if (userID) {
            fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.MESSAGES}/${userID}`).then(res => res.json()).then(res => {
                setThreads(res.inbox.message_threads)
            }).catch(err => console.log("my error : ", err))
        }
        
    }, [userID]);

    return threads
}


export const useChatThread = (threadID: number | string) => {
  const [chatHistory, setChatHistory] = useState([])


  useEffect(() => {
    try {
      if (threadID) {
        fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.THREAD}/${threadID}`).then(res => res.json()).then(res => {
          setChatHistory(res.chat_messages);
        });
      }
    } catch(err) {

    }
  }, [])

  return chatHistory;
}