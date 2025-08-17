# 🚀 지정호 포트폴리오 웹사이트

안녕하세요! 저는 **지정호**입니다. 작은 창피함을 두려워하지 않고, 이를 성장의 발판으로 삼으며 끊임없이 배우고 발전하는 개발자가 되고자 합니다.

## 📋 프로젝트 소개

이 프로젝트는 제 개인 포트폴리오 웹사이트입니다. React와 Next.js를 기반으로 구축되었으며, 모던하고 반응형 디자인을 적용했습니다.

### ✨ 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **스크롤 애니메이션**: 부드러운 스크롤 효과와 인터랙션
- **다크 테마**: 모던하고 세련된 다크 테마 적용
- **섹션별 구성**: Hero, About, Experience, Skills, Projects, Education, Contact
- **상단 이동 버튼**: 사용자 편의를 위한 스크롤 탑 버튼

## 🛠️ 기술 스택

### Frontend

- **Next.js 15.4.6** - React 프레임워크
- **React 19.1.0** - 사용자 인터페이스 라이브러리
- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크
- **Lucide React** - 아이콘 라이브러리

### UI Components

- **Radix UI** - 접근성이 뛰어난 UI 컴포넌트
- **shadcn/ui** - 재사용 가능한 컴포넌트 시스템
- **Class Variance Authority** - 컴포넌트 변형 관리

### 개발 도구

- **ESLint** - 코드 품질 관리
- **Turbopack** - 빠른 개발 서버
- **PostCSS** - CSS 전처리

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**

   ```bash
   git clone https://github.com/your-username/hoya.git
   cd hoya
   ```

2. **의존성 설치**

   ```bash
   npm install
   # 또는
   yarn install
   ```

3. **개발 서버 실행**

   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint
```

## 📁 프로젝트 구조

```
hoya/
├── public/
│   ├── fonts/           # 폰트 파일
│   └── images/          # 이미지 리소스
├── src/
│   ├── app/
│   │   ├── components/  # 페이지별 컴포넌트
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── SkillSection.jsx
│   │   │   ├── ProjectSection.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── globals.css  # 전역 스타일
│   │   ├── layout.js    # 루트 레이아웃
│   │   └── page.js      # 메인 페이지
│   ├── components/
│   │   ├── common/      # 공통 컴포넌트
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── TopButton.jsx
│   │   └── ui/          # UI 컴포넌트
│   │       ├── button.jsx
│   │       ├── dialog.jsx
│   │       └── tabs.jsx
│   └── lib/
│       └── utils.js     # 유틸리티 함수
├── components.json      # shadcn/ui 설정
├── tailwind.config.js   # Tailwind CSS 설정
└── package.json         # 프로젝트 의존성
```

## 🎨 주요 컴포넌트

### HeroSection

- 애니메이션 타이틀 (Frontend Developer, React Developer, Backend Developer)
- 소셜 미디어 링크 (GitHub, Velog, Email)
- CTA 버튼 (프로젝트 보기, 연락하기)

### AboutSection

- 개인 소개 및 자기소개
- 개발 철학 및 목표

### ExperienceSection

- 경력 및 프로젝트 경험
- 회사별 상세 정보

### SkillSection

- 기술 스택 표시
- 프로그래밍 언어, 프레임워크, 도구

### ProjectSection

- 주요 프로젝트 포트폴리오
- 프로젝트 설명 및 기술 스택

### EducationSection

- 학력 및 교육 배경
- 자격증 및 수료 과정

### ContactSection

- 연락처 정보
- 이메일 폼

## 🌟 특징

- **모던 디자인**: 깔끔하고 전문적인 디자인
- **접근성**: WCAG 가이드라인 준수
- **성능 최적화**: Next.js의 최적화 기능 활용
- **SEO 친화적**: 메타데이터 및 구조화된 마크업
- **반응형**: 모바일, 태블릿, 데스크톱 최적화

## 📞 연락처

- **GitHub**: [https://github.com/hoya-q](https://github.com/hoya-q)
- **Velog**: [https://velog.io/@kiik52/posts](https://velog.io/@kiik52/posts)
- **Email**: contact@example.com

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**지정호** - Frontend Developer  
_끊임없이 배우고 성장하는 개발자_
