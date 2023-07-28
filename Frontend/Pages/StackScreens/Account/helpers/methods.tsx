import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TextResources } from "../../../../Common/GlobalDeclarations";
import { StackLoginRoutes, StackRootParamList } from "../../../types";
import { LoginForm, SelectedImage } from "./types";

export const handleform = async (form: LoginForm, navigation: NativeStackNavigationProp<StackRootParamList>) => {
    if (form.email.length !== 0 && form.password.length !== 0) {
      fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.LOGIN}`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (res.status === 200) {
          return res.json()
        }

        return res
      }).then(res => {
        navigation.navigate(StackLoginRoutes.MAIN, res)
      }).catch(err => console.log('error'));
    }
  
  }

  const convertToSchema = (photos: SelectedImage) => {
    let temp = [];
    Object.keys(photos).map(photo => {
      if (photos[photo].uri !== "") {
        temp.push({
          file_path: photos[photo].uri
        })
      }
    });
    
   return temp;
  }
export const createAccount = async (routeParams: any, photos: SelectedImage) => {
    try {
      const accountDetails = await routeParams.promise();
      const userInfo = {
        name: accountDetails.businessName,
        email: accountDetails.email,
        phone: accountDetails.phone,
        password: accountDetails.pswd,
        work_images: convertToSchema(photos),
        work_locations: [],
    }
      const userCreated = await (await fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.PROFILE}/newUser`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      })).json().catch(e => console.log(e));

      if (userCreated)  {
        // dispatch(setUserStore(userCreated))
        return userCreated
      } else {
        return false
      }
    } catch(e) {
      console.log(e)
    }
    return false;
  }