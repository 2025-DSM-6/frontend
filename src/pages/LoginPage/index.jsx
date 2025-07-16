function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <form>
        <label>
          아이디:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          비밀번호:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
