/* DDX Miami — one evening, the night before the conference, hosted with the
   University of Miami. Served only on the side-miami host. Facts from the DDX
   Miami agenda page and the planning notes in Notion (FF Operations). */
export const MIAMI_EVENTS = [
  {
    id: 'miami-um',
    kicker: 'The night before',
    title: 'Pre-Conference Mixer',
    by: 'with the University of Miami, at the Frost Institute',
    partners: ['um'],
    weekday: 'Thursday', date: '24 September 2026', time: '6:00 PM – open end',
    start: '2026-09-24T18:00:00', end: '2026-09-24T21:30:00',
    venue: 'Frost Institute, University of Miami', address: '1201 Memorial Dr, Coral Gables, FL 33146',
    maps: 'https://maps.google.com/?q=Frost+Institute+for+Chemistry+and+Molecular+Science,+1201+Memorial+Dr,+Coral+Gables,+FL+33146',
    bg: 'assets/img/bg/miami-ocean-drive.jpg', bgPos: '50% 55%',
    lede: 'Learn to unlearn: why letting go of what worked matters more than ever — and what to pick up instead.',
    body: 'The evening before DDX Miami, on the Coral Gables campus: drinks, light snacks and the people you’ll spend tomorrow with. In between, a 45-minute panel on leadership in disruptive times with Cassie McDaniel (VP of Design, Medium), Monica Girel (Senior Product Designer, Adobe) and Elizabeth Reme (Senior UX Researcher, American Express). Park in the Red Lot, or take the Metrorail.',
    agenda: [
      ['6:00', 'Doors open'],
      ['7:00', 'Welcome — University of Miami & DDX'],
      ['7:10', 'Panel: Learn to Unlearn — leadership in disruptive times'],
      ['8:00', 'Drinks, light snacks & networking'],
    ],
    fine: '',
    notion: { email: 'Email', db: 'faa8bf18-6cd2-4003-8783-f615b65848a1', dataSource: 'f0c59426-e983-4263-9031-15439954fb92' },
  },
];
