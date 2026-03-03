import { CompanyListSection, ConsultingQrModal } from '@/features/ticket-consulting/components';
import { GuideContentSection } from '@/features/guide-content/components';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 items-center text-center animate-fade-in w-full max-w-5xl">
                {/* 상품권 업체 리스트 (애니메이션 적용) */}
                <CompanyListSection />

                {/* 설명 가이드 콘텐츠 섹션 */}
                <GuideContentSection />

                {/* 선택 시 나타나는 QR 코드 모달 */}
                <ConsultingQrModal />
            </main>
        </div>
    );
}
