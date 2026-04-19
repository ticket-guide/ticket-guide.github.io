# 서버 배포 가이드 (PM2 + Nginx)

## 📋 사전 요구사항

- **Node.js** (v18 이상)
- **npm**
- **PM2** (`npm install -g pm2`)
- **Nginx** (리버스 프록시 설정 시)

---

## 🚀 배포 순서

### 1단계: 소스 코드 준비

```bash
# 서버에서 최신 코드 가져오기
cd /path/to/ticket-guide.github.io
git pull origin main
```

### 2단계: 의존성 설치

```bash
npm install
```

### 3단계: 정적 사이트 빌드

```bash
npm run build
```

> 빌드가 완료되면 `out/` 폴더에 정적 파일이 생성됩니다.
> (`next.config.ts`에 `output: 'export'` 설정이 되어 있음)

### 4단계: PM2로 정적 파일 서빙

```bash
# 최초 배포 시
pm2 serve out 3000 --name "ticket-guide" --spa

# 이후 재배포 시 (빌드 후)
pm2 restart ticket-guide
```

> `--spa` 옵션: SPA 라우팅을 위해 모든 요청을 `index.html`로 리다이렉트합니다.

---

## 🔄 재배포 (업데이트) 절차

코드를 수정하고 서버에 반영할 때:

```bash
# 1. 최신 코드 가져오기
git pull origin main

# 2. 의존성 갱신
npm install

# 3. 빌드
npm run build

# 4. PM2 재시작
pm2 restart ticket-guide
```

---

## 🛠 PM2 관리 명령어

### 상태 확인

```bash
pm2 list          # 실행 중인 앱 목록 확인
pm2 status        # 동일
```

### 중지 / 재시작

```bash
# 앱 이름으로 멈추기
pm2 stop ticket-guide

# 앱 ID로 멈추기 (pm2 list에서 확인)
pm2 stop 0

# 모든 앱 중지
pm2 stop all

# 재시작
pm2 restart ticket-guide
```

### 삭제

```bash
# 앱 이름으로 삭제
pm2 delete ticket-guide

# 모든 앱 삭제
pm2 delete all
```

### 로그 확인

```bash
# 앱 이름으로 로그 보기
pm2 logs ticket-guide

# 앱 ID로 로그 보기
pm2 logs 0

# 최근 100줄만 보기
pm2 logs ticket-guide --lines 100
```

### PM2 자동 시작 (서버 재부팅 시)

```bash
pm2 startup      # 시스템 시작 시 PM2 자동 실행 등록
pm2 save         # 현재 프로세스 목록 저장
```

---

## 🌐 Nginx 관련

### Nginx 재시작

```bash
sudo systemctl restart nginx
```

### Nginx 설정 테스트

```bash
sudo nginx -t    # 설정 문법 검증
```

### Nginx 상태 확인

```bash
sudo systemctl status nginx
```

---

## ⚡ 한 줄 재배포 스크립트

서버에서 빠르게 재배포하고 싶을 때:

```bash
git pull origin main && npm install && npm run build && pm2 restart ticket-guide
```
