import { useQuery } from '@tanstack/react-query';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function RevenueChart() {
  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period'],
    queryFn: getDailyRevenueInPeriod
  })

  return (
    <Card className="col-span-6" >
      <CardHeader className="flex-row items-center justify-between pb-8" >
        <div className="space-y-1" >
          <CardTitle className="text-base font-medium" >Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod && (
          <ResponsiveContainer width='100%' height={240} >
            <LineChart style={{ fontSize: 12 }} data={dailyRevenueInPeriod} >
              <YAxis
                width={88}
                stroke='#8888'
                axisLine={false}
                tickLine={false}
                tickFormatter={(value: number) => value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              />

              <XAxis
                dataKey='date'
                tickLine={false}
                axisLine={false}
              />

              <CartesianGrid
                vertical={false}
                className='stroke-muted'
              />

              <Line
                type='linear'
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet['400']}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
