## 주요기능

* Firebase API 연동 및 테스트
* Firebase를 이용한 Google Login 구현
* Firebase를 이용한 이메일로 패스워드 변경하기

## 완성화면

|Feature|Description|
|--|--|
|Feature1|<img src="https://user-images.githubusercontent.com/60862525/108984497-54ee1c00-76d3-11eb-8885-d1a33e67d1f6.png" width=250/><br>로그인 하지 않는 초기 화면|
|Feature2|<img src="https://user-images.githubusercontent.com/60862525/108985159-0e4cf180-76d4-11eb-8963-e605cb0fc46c.gif" width=250/><br>firebase를 이용한 Google Login 화면|
|Feature3|<img src="https://user-images.githubusercontent.com/60862525/108985349-4a805200-76d4-11eb-97db-6b9abf25605f.png" width=250/><br>firbase를 이용한 패드워드 찾기|
|Feature4|<img src="https://user-images.githubusercontent.com/60862525/108985520-7e5b7780-76d4-11eb-8a95-cb6ed1656a86.png"/><br>가입된 이메일로 메일 전송|
|Feature5|<img src="https://user-images.githubusercontent.com/60862525/108985797-cd091180-76d4-11eb-9de1-c1ae76117c93.png" width=250/><br>로그인시 notify화면 이동|

## Study Note

#### Google Login 구현하기
  - google API를 이용해서 소셜 로그인 구현
  - 로그인 성공후 Notify 화면 이동
~~~ts
 async signInAsync() {
        console.log("HomeScreen.js 6 | Logged In")

        try {
            const {type, user} = await Google.logInAsync({
                iosClientId: 'GOOGLE CLIENT ID'
            });

            if (type === "success") {
                return this.props.navigation.navigate("RequestSendNotification", {user})
            }
        } catch (error) {
            console.log("LoginScreen.ks 19 | error with login", error)
        }
    }
~~~

#### Forgot Password Page
  - useState Hook을 이용한 상태값 핸들링
  - Firebase

