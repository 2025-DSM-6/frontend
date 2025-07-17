import useLoginInputStore from "@/store/loginInputStore";
import * as S from "./styles";

function LoginPage() {
  const { username, password, setUsername, setPassword } = useLoginInputStore();
  return (
    <S.Background>
      <S.LoginBox>
        <S.Title>Xquare 계정으로 로그인하세요!</S.Title>
        <form>
          <S.InputSection>
            <S.Label>
              아이디
              <S.Input
                type="text"
                name="username"
                placeholder="Xquare 아이디를 입력해주세요."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </S.Label>
            <S.Label>
              비밀번호
              <S.Input
                type="password"
                name="password"
                placeholder="Xquare 비밀번호를 입력해주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.Label>
          </S.InputSection>
        </form>
        <S.Button onClick={() => { }}>로그인</S.Button>
      </S.LoginBox>
    </S.Background>
  );
}

export default LoginPage;
