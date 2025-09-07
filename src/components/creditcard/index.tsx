import logo from '@/assets/images/logo.webp';
import chip from '@/assets/images/chip.webp';

type Props = {
  name?: string;
  number?: string; // ex: "1234 5678 9012 3456"
  expiry?: string; // ex: "12/28"
  brand?: string; // ex: "VISA", "Mastercard"
  primary?: string; // cor principal (ex: "#00d9d2")
  surface?: string; // cor secundária/fundo extra (ex: "#0f1214" ou um tom claro)
  textOnDark?: string; // cor do texto quando fundo for escuro
};

export default function CreditCard({
  name = 'NOME DO CLIENTE',
  number = '1234 5678 9012 3456',
  expiry = '12/28',
  brand = 'VISA',
  primary = '#00d9d2',
  surface = '#111315',
  textOnDark = 'white',
}: Props) {
  return (
    <div
      className="w-full max-w-sm rounded-2xl p-4 shadow-xl"
      style={{
        background: `linear-gradient(135deg, ${surface} 0%, ${primary} 100%)`,
        color: textOnDark,
      }}
      aria-label="Cartão de crédito"
    >
      {/* topo */}
      <div className="flex items-center justify-between">
        <div className="w-20 opacity-80">
          <img src={logo} alt="Logo da empresa" />
        </div>

        <div className="text-base font-semibold tracking-widest">{brand}</div>
      </div>

      {/* chip */}
      <div className="mt-4 flex items-center gap-3">
        <img src={chip} alt="Chip do cartão de crédito" className="size-8" />
      </div>

      {/* número */}
      <div className="mt-6 text-xl tracking-widest tabular-nums">{number}</div>

      {/* rodapé */}
      <div className="mt-4 flex items-end justify-between">
        <div className="text-xs opacity-80">
          <div>Validade</div>
          <div className="text-sm font-medium">{expiry}</div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-80">Nome</div>
          <div className="text-sm font-semibold">{name}</div>
        </div>
      </div>
    </div>
  );
}
