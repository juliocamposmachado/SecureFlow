import { Terminal, Circle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Command {
  command: string;
  output: string[];
  delay: number;
}

const commands: Command[] = [
  {
    command: 'systemctl status secureflow',
    output: [
      '● secureflow.service - SecureFlow Validation System',
      '   Loaded: loaded (/etc/systemd/system/secureflow.service; enabled)',
      '   Active: active (running) since Mon 2025-10-21 10:23:45 UTC',
      '   Memory: 128.4M',
      '   CGroup: /system.slice/secureflow.service',
      '           └─1234 /usr/bin/python3 /opt/secureflow/main.py',
    ],
    delay: 800,
  },
  {
    command: 'tail -f /var/log/secureflow/validation.log',
    output: [
      '[2025-10-21 10:24:12] INFO: Validation request received - ID: req_7a3f9e2',
      '[2025-10-21 10:24:12] INFO: GPS coordinates validated - Lat: -23.5505, Lng: -46.6333',
      '[2025-10-21 10:24:12] INFO: Accuracy check passed - 12.5m precision',
      '[2025-10-21 10:24:13] INFO: Anti-spoofing analysis completed - CLEAN',
      '[2025-10-21 10:24:13] INFO: Risk score calculated - LOW (0.12)',
      '[2025-10-21 10:24:13] SUCCESS: Validation approved - Response time: 87ms',
    ],
    delay: 600,
  },
  {
    command: 'python3 /opt/secureflow/analytics.py --today',
    output: [
      'SecureFlow Analytics Report - 2025-10-21',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Total Validations:      12,458',
      'Approved:               12,103 (97.15%)',
      'Rejected:                  355 (2.85%)',
      'Avg Response Time:        94ms',
      'Peak TPS:                  847',
      'Fraud Attempts Blocked:    142',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    ],
    delay: 700,
  },
  {
    command: 'docker ps --filter "name=secureflow"',
    output: [
      'CONTAINER ID   IMAGE              STATUS         PORTS                    NAMES',
      'a3f8c9d12e45   secureflow:v2.3   Up 3 hours     0.0.0.0:8443->8443/tcp  secureflow-api',
      '2b7e4a1f3c89   secureflow:v2.3   Up 3 hours     0.0.0.0:8444->8444/tcp  secureflow-worker',
      '9c1d5e8f2a67   postgres:15       Up 3 hours     5432/tcp                 secureflow-db',
    ],
    delay: 500,
  },
  {
    command: 'curl -s http://localhost:8443/health | jq',
    output: [
      '{',
      '  "status": "healthy",',
      '  "uptime": "3h 42m 15s",',
      '  "validations_processed": 12458,',
      '  "active_connections": 247,',
      '  "memory_usage": "128.4MB",',
      '  "cpu_usage": "12.3%",',
      '  "database": "connected"',
      '}',
    ],
    delay: 600,
  },
];

export function TerminalSimulation() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedOutput, setDisplayedOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState<Array<{ command: string; output: string[] }>>([]);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      const timer = setTimeout(() => {
        setCurrentCommandIndex(0);
        setHistory([]);
        setDisplayedCommand('');
        setDisplayedOutput([]);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const currentCmd = commands[currentCommandIndex];
    let charIndex = 0;
    setIsTyping(true);
    setDisplayedCommand('');
    setDisplayedOutput([]);

    const typeCommand = setInterval(() => {
      if (charIndex < currentCmd.command.length) {
        setDisplayedCommand(currentCmd.command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeCommand);
        setIsTyping(false);

        setTimeout(() => {
          let lineIndex = 0;
          const showOutput = setInterval(() => {
            if (lineIndex < currentCmd.output.length) {
              setDisplayedOutput((prev) => [...prev, currentCmd.output[lineIndex]]);
              lineIndex++;
            } else {
              clearInterval(showOutput);
              setTimeout(() => {
                setHistory((prev) => [
                  ...prev,
                  { command: currentCmd.command, output: currentCmd.output },
                ]);
                setCurrentCommandIndex((prev) => prev + 1);
              }, currentCmd.delay);
            }
          }, 50);
        }, 300);
      }
    }, 30);

    return () => clearInterval(typeCommand);
  }, [currentCommandIndex]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center">
            <Terminal className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Terminal de Produção</h3>
            <p className="text-sm text-slate-400">root@secureflow-server:~#</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Circle className="w-3 h-3 text-red-500 fill-current" />
          <Circle className="w-3 h-3 text-yellow-500 fill-current" />
          <Circle className="w-3 h-3 text-green-500 fill-current" />
        </div>
      </div>

      <div className="bg-slate-950 p-6 font-mono text-sm overflow-auto" style={{ height: '400px' }}>
        <div className="space-y-2">
          {history.map((item, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400">root@secureflow</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-200">{item.command}</span>
              </div>
              {item.output.map((line, lineIdx) => (
                <div
                  key={lineIdx}
                  className={`${
                    line.includes('SUCCESS') || line.includes('healthy')
                      ? 'text-emerald-400'
                      : line.includes('ERROR') || line.includes('FAILED')
                      ? 'text-red-400'
                      : line.includes('INFO')
                      ? 'text-blue-400'
                      : line.includes('━')
                      ? 'text-slate-600'
                      : 'text-slate-300'
                  } leading-relaxed`}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}

          {displayedCommand && (
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400">root@secureflow</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-200">
                  {displayedCommand}
                  {isTyping && <span className="animate-pulse">▊</span>}
                </span>
              </div>
              {displayedOutput.map((line, idx) => (
                <div
                  key={idx}
                  className={`${
                    line.includes('SUCCESS') || line.includes('healthy')
                      ? 'text-emerald-400'
                      : line.includes('ERROR') || line.includes('FAILED')
                      ? 'text-red-400'
                      : line.includes('INFO')
                      ? 'text-blue-400'
                      : line.includes('━')
                      ? 'text-slate-600'
                      : 'text-slate-300'
                  } leading-relaxed`}
                >
                  {line}
                </div>
              ))}
            </div>
          )}

          {!displayedCommand && history.length === 0 && (
            <div className="text-slate-500">
              <div className="flex items-center space-x-2">
                <span className="text-emerald-400">root@secureflow</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="animate-pulse">▊</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-slate-900 px-6 py-3 border-t border-slate-800">
        <p className="text-xs text-slate-400 leading-relaxed">
          Demonstração em tempo real do sistema SecureFlow em ambiente de produção. Comandos executados automaticamente para ilustrar operações típicas.
        </p>
      </div>
    </div>
  );
}
