import Link from "next/link";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li className={classes.menu_item}>
          <Link className={classes.menu_link} href="">
            새소식
          </Link>
          <div className={classes.depth_menu}>
            <Link href="">공지사항</Link>
            <Link href="">업데이트</Link>
            <Link href="">이벤트</Link>
            <Link href="">GM노트</Link>
            <Link href="">펄 상점</Link>
          </div>
        </li>
        <li className={classes.menu_item}>
          <Link className={classes.menu_link} href="">
            게임 소개
          </Link>
          <div className={classes.depth_menu}>
            <Link href="">게임 특징</Link>
            <Link href="">클래스 소개</Link>
            <Link href="">모험가 가이드</Link>
            <Link href="">확률형 아이템 리스트 및 확률 안내</Link>
          </div>
        </li>
        <li className={classes.menu_item}>
          <Link className={classes.menu_link} href="">
            모험가 캠프
          </Link>
          <div className={classes.depth_menu}>
            <Link href="">뷰티앨범</Link>
            <Link href="">포토갤러리</Link>
            <Link href="">모험가</Link>
            <Link href="">길드</Link>
            <Link href="">업데이트 히스토리</Link>
            <Link href="">통합거래소</Link>
            <Link href="">검은사막TV</Link>
          </div>
        </li>
        <li className={classes.menu_item}>
          <Link className={classes.menu_link} href="">
            상점
          </Link>
          <div className={classes.depth_menu}>
            <Link href="">Acoin</Link>
            <Link href="">쿠폰 사용</Link>
          </div>
        </li>
        <li className={classes.menu_item}>
          <Link className={classes.menu_link} href="">
            커뮤니티
          </Link>
          <div className={classes.depth_menu}>
            <Link href="">전체글</Link>
            <Link href="">피드백 게시판</Link>
            <Link href="">자유 게시판</Link>
            <Link href="">게임 토론</Link>
            <Link href="">모집 & 홍보</Link>
            <Link href="">건의 게시판</Link>
            <Link href="">팁 & 노하우</Link>
            <Link href="">클래스 공략</Link>
            <Link href="">팬아트</Link>
            <Link href="">스크린샷 & 영상</Link>
            <Link href="">지식의 오아시스</Link>
          </div>
        </li>
        <li className={classes.menu_item}>
          <Link className={classes.menu_link} href="">
            다운로드
          </Link>
          <div className={classes.depth_menu}>
            <Link href="">클라이언트</Link>
            <Link href="">영상</Link>
            <Link href="">월페이퍼</Link>
            <Link href="">OST</Link>
          </div>
        </li>
        <li className={classes.menu_item}>
          <Link className={classes.menu_link} href="">
            고객센터
          </Link>
          <div className={classes.depth_menu}>
            <Link href="">FAQ</Link>
            <Link href="">신고센터</Link>
            <Link href="">보안센터</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
