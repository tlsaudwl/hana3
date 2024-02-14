interface Naver {
          userid: number;
          username: string;
          email: string;
        }
interface Kakao {
          userid: number;
          userName: string;
          kakaotalk: string;
          email: string;
        }
interface SnsUser {
          userid: number;
          email: string;
          [key: string]: string | number; 
        }

// 다음 코드에 오류가 없으면 통과!
const naverUser: SnsUser = { userid: 1, email: 'abc@naver.com', username: 'HH' };
const kakaoUser: SnsUser = { userid: 1, email: 'abc@hanmail.net', userName: 'HH', kakaotalk: 'HH' };
        