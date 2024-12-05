import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const PufferFinanceDirectory = () => {
  const urls = [
    {
      id: 1,
      name: 'Puffer Finance',
      url: 'https://chatgpt.com/g/g-8Oh5JO9Kb-puffer-finance'
    },
    {
      id: 2,
      name: 'Puffer Finance(DEV)',
      url: 'https://chatgpt.com/g/g-f9WEy0SIU-puffer-finance-dev'
    },
    {
      id: 3,
      name: 'Puffer UniFi',
      url: 'https://chatgpt.com/g/g-MffOPqey9-puffer-unifi'
    },
    {
      id: 4,
      name: 'Puffer UniFi AVS',
      url: 'https://chatgpt.com/g/g-VYgu6R6Ir-puffer-unifi-avs'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="w-full bg-white shadow-lg">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Puffer Finance GPTs Directory</CardTitle>
        </CardHeader>
        <CardContent className="divide-y">
          {urls.map((item) => (
            <div key={item.id} className="py-4 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1"
                >
                  {item.url}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PufferFinanceDirectory;