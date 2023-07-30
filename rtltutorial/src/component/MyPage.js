export default function MyPage({ user }) {
  return (
    <div>
      <h1>hello</h1>
      {user?.name ? (
        <h2>{user.name}님 환영합니다.</h2>
      ) : (
        <h2>
          로그인을 해주세요.<button>로그인</button>
        </h2>
      )}
    </div>
  );
}
