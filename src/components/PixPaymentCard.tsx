import { Wallet, QrCode, Copy, Check, Loader2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function PixPaymentCard() {
  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const pixKey = 'radiotatuapefm@gmail.com';
  const amount = 0.97;

  const generatePaymentLink = () => {
    setLoading(true);

    setTimeout(() => {
      const mercadoPagoLink = `https://www.mercadopago.com.br/checkout/v1/payment/pix?amount=${amount}&email=${encodeURIComponent(pixKey)}&description=Teste%20de%20Pagamento%20SecureFlow`;
      setPaymentLink(mercadoPagoLink);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openPaymentLink = () => {
    if (paymentLink) {
      window.open(paymentLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <Wallet className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Pagamento via PIX</h3>
          <p className="text-sm text-slate-500">Teste nossa integração de pagamentos</p>
        </div>
      </div>

      {!paymentLink && !loading && (
        <div className="text-center py-8">
          <QrCode className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600 mb-2">
            Demonstração de pagamento integrado
          </p>
          <p className="text-sm text-slate-500 mb-6">
            Valor de teste: <span className="font-bold text-green-600">R$ 0,97</span>
          </p>
          <button
            onClick={generatePaymentLink}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Wallet className="w-5 h-5" />
            <span>Gerar Link de Pagamento</span>
          </button>
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <Loader2 className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Gerando link de pagamento...</p>
        </div>
      )}

      {paymentLink && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-semibold text-sm">LINK GERADO COM SUCESSO</span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-slate-600 text-sm font-medium mb-2">Chave PIX</p>
                <div className="flex items-center space-x-2">
                  <code className="flex-1 bg-white px-3 py-2 rounded text-sm text-slate-900 border border-green-300">
                    {pixKey}
                  </code>
                  <button
                    onClick={() => copyToClipboard(pixKey)}
                    className="p-2 bg-white hover:bg-green-100 border border-green-300 rounded transition-colors"
                    title="Copiar chave PIX"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-600" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-slate-600 text-sm font-medium mb-2">Valor</p>
                <p className="text-2xl font-bold text-green-600">R$ {amount.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
            <p className="text-sm text-slate-700 font-medium">Como pagar:</p>
            <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
              <li>Clique no botão abaixo para abrir o link de pagamento</li>
              <li>Escolha seu banco ou aplicativo de pagamentos</li>
              <li>Escaneie o QR Code ou use a chave PIX</li>
              <li>Confirme o pagamento de R$ 0,97</li>
            </ol>
          </div>

          <button
            onClick={openPaymentLink}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Abrir Link de Pagamento</span>
          </button>

          <p className="text-xs text-center text-slate-500">
            Este é um ambiente de teste. O pagamento real depende da integração com gateway de pagamentos.
          </p>

          <button
            onClick={() => {
              setPaymentLink(null);
              setLoading(false);
            }}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            Gerar Novo Link
          </button>
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-slate-200">
        <p className="text-xs text-slate-600 leading-relaxed">
          Nossa integração de pagamentos suporta PIX, cartões de crédito e débito, com processamento seguro e confirmação em tempo real. Este exemplo demonstra a facilidade de integração com diferentes métodos de pagamento.
        </p>
      </div>
    </div>
  );
}
