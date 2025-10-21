import { MapPin, Navigation, Loader2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export function LocationCard() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const requestLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocalização não suportada neste navegador');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp,
        });
        setPermissionGranted(true);
        setLoading(false);
      },
      (err) => {
        setError(
          err.code === 1
            ? 'Permissão de localização negada'
            : 'Erro ao obter localização'
        );
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    if (permissionGranted && location) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
          });
        },
        (err) => {
          console.error('Erro ao monitorar localização:', err);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 5000,
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [permissionGranted, location]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <MapPin className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Localização em Tempo Real</h3>
          <p className="text-sm text-slate-500">GPS de alta precisão</p>
        </div>
      </div>

      {!location && !loading && !error && (
        <div className="text-center py-8">
          <Navigation className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600 mb-6">
            Clique para compartilhar sua localização e demonstrar nossa tecnologia de validação geográfica
          </p>
          <button
            onClick={requestLocation}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Ativar Localização
          </button>
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Obtendo sua localização...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Erro</p>
            <p className="text-red-600 text-sm">{error}</p>
            <button
              onClick={requestLocation}
              className="mt-3 text-sm text-red-700 hover:text-red-800 font-medium underline"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      )}

      {location && (
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-800 font-semibold text-sm">LOCALIZAÇÃO ATIVA</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600 font-medium mb-1">Latitude</p>
                <p className="text-slate-900 font-mono">{location.latitude.toFixed(6)}</p>
              </div>
              <div>
                <p className="text-slate-600 font-medium mb-1">Longitude</p>
                <p className="text-slate-900 font-mono">{location.longitude.toFixed(6)}</p>
              </div>
              <div>
                <p className="text-slate-600 font-medium mb-1">Precisão</p>
                <p className="text-slate-900">{location.accuracy.toFixed(0)} metros</p>
              </div>
              <div>
                <p className="text-slate-600 font-medium mb-1">Última atualização</p>
                <p className="text-slate-900">
                  {new Date(location.timestamp).toLocaleTimeString('pt-BR')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Sua localização está sendo monitorada em tempo real. Este é um exemplo de como nosso sistema valida a posição geográfica de usuários com precisão de GPS, detectando tentativas de fraude e spoofing.
            </p>
          </div>

          <button
            onClick={requestLocation}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            Atualizar Localização
          </button>
        </div>
      )}
    </div>
  );
}
