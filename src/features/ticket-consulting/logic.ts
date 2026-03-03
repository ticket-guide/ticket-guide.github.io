import { ConsultingType, ConsultingOption, Company } from './types';

// 기존 호환용
export const getConsultingOptions = (): ConsultingOption[] => [
    { id: 'COUNSEL', label: '상품권 상담하기', description: '티켓가이드만의 1:1 맞춤 상담 예약 절차 안내' },
    { id: 'INQUIRY', label: '문의하기', description: '상품권 관련 24시간 실시간 문의 접수' },
    { id: 'SELL', label: '상품권 판매하기', description: '안전하고 빠른 판매를 위한 전문가 연결' },
];

export const getCompanies = (): Company[] => [
    {
        id: 'company-a',
        name: '티켓가이드 공식 파트너',
        description: '업계 최저 수수료 보장 및 5분 내 입금',
        features: ['24시간 즉시입금', '수수료 최저', '안전보장'],
        themeKey: 'blue'
    },
    {
        id: 'company-b',
        name: '신속티켓 24',
        description: '핀번호만 있으면 1분 컷 초고속 거래',
        features: ['비대면 특화', '자동 매입 봇', '소액환영'],
        themeKey: 'purple'
    },
    {
        id: 'company-c',
        name: '프리미엄 지류 티켓',
        description: '지류 상품권 대량 매입 전문, 방문 출장 가능',
        features: ['대량매입 우대', '현장방문', '기업전문'],
        themeKey: 'emerald'
    },
    {
        id: 'company-d',
        name: '플레이 포인트 익스체인지',
        description: '구글, 넥슨, 문화상품권 모바일 특화 거래소',
        features: ['게임특화', '환율우대', '365일 연중무휴'],
        themeKey: 'rose'
    },
];

export const getQrCodeUrlForType = (typeId: string): string => {
    // TODO: 실제 QR 코드로 교체 (typeId가 특정 업체 ID일 경우 해당 업체의 QR을 반환)
    return `/images/qr-${typeId}.png`;
};

export const getModalTitleForType = (typeId: string): string => {
    const companies = getCompanies();
    const company = companies.find(c => c.id === typeId);
    if (company) {
        return `${company.name} 상담 연결`;
    }

    switch (typeId as ConsultingType) {
        case 'COUNSEL': return '1:1 맞춤 상담 연결';
        case 'INQUIRY': return '실시간 상담 문의';
        case 'SELL': return '신속한 판매 상담 연결';
        default: return '상담 안내';
    }
};
