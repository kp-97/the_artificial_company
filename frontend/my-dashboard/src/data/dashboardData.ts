export interface CardInfo {
  title: string;
  value: string | number;
}

export type Section = 'chat' | 'tasks' | 'calendar' | 'app';

export const dashboardData: Record<Section, CardInfo[]> = {
  chat: [
    { title: 'Unread Messages', value: 12 },
    { title: 'Last Active', value: '3 mins ago' },
  ],
  tasks: [
    { title: 'Pending', value: 8 },
    { title: 'Completed', value: 23 },
  ],
  calendar: [
    { title: 'Today', value: 'Meeting at 3 PM' },
    { title: 'Upcoming', value: '3 events' },
  ],
  app: [
    { title: 'Version', value: '1.4.2' },
    { title: 'Uptime', value: '97.6%' },
  ],
};

