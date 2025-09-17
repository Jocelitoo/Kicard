import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { phone } from "@/utils/phone"
import { Instagram, Mail } from "lucide-react"
import wpp from '@/assets/svgs/wppWhite.svg';
import { useEffect, useState } from "react";


export const Privacity = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Verificar se o usuário está acessando no desktop ou celular
    useEffect(() => {
        const userAgent =
            typeof navigator === 'undefined' ? '' : navigator.userAgent;
        const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    return (
        <>
            <Header />

            <main className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto text-center py-8 flex flex-col items-center gap-16 ">
                <div className="space-y-4 max-w-148">
                    <h1 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">Política de privacidade</h1>

                    <p className="lg:text-xl lg:text-justify">Na Kicard, estamos comprometidos em proteger a privacidade dos nossos clientes e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">1. Informações que coletamos</h2>

                    <p className="lg:text-xl lg:text-justify">Coletamos informações pessoais que você nos fornece ao preencher formulários, solicitar informações ou entrar em contato conosco. Essas informações podem incluir: Nome, CPF, E-mail, Telefone, Endereço e informações financeiras necessárias para a concessão de crédito.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">2. Como usamos suas informações</h2>

                    <p className="lg:text-xl lg:text-justify">Utilizamos suas informações para os seguintes propósitos: Processar e gerenciar solicitações de crédito consignado. Entrar em contato para fornecer informações sobre nossos produtos e serviços. Cumprir obrigações legais e regulamentares. Melhorar nossos serviços e personalizar a experiência do usuário.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">3. Compartilhamento de informações</h2>

                    <p className="lg:text-xl lg:text-justify">Não vendemos, trocamos ou transferimos suas informações pessoais a terceiros, exceto quando necessário para cumprir uma obrigação legal ou quando você nos autoriza a fazê-lo.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">4. Segurança das informações</h2>

                    <p className="lg:text-xl lg:text-justify">Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação. No entanto, nenhum método de transmissão pela internet ou de armazenamento eletrônico é 100% seguro.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">5. Seus direitos</h2>

                    <p className="lg:text-xl lg:text-justify">Você tem o direito de acessar, corrigir ou excluir suas informações pessoais, bem como de retirar seu consentimento para o uso das mesmas. Para exercer esses direitos, entre em contato conosco.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">6. Cookies</h2>

                    <p className="lg:text-xl lg:text-justify">Nosso site pode usar cookies para melhorar a sua experiência. Os cookies são pequenos arquivos de texto que são armazenados no seu dispositivo. Você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">7. Alterações nesta política</h2>

                    <p className="lg:text-xl lg:text-justify">Podemos atualizar esta Política de Privacidade periodicamente. As mudanças serão publicadas nesta página e a data de vigência será atualizada.</p>
                </div>

                <div className="space-y-4 max-w-148">
                    <h2 className="font-bold text-xl lg:text-4xl border-x-4 border-projectBlue">8. Contato</h2>

                    <p className="lg:text-xl lg:text-justify">Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações, entre em contato conosco.</p>
                </div>

            </main>

            <Footer />
        </>
    )
}