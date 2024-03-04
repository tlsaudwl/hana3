type Props = {
  params: { time: string };
};

const TIMES = ["morning", "afternoon", "evening"];

export async function generateStaticParams() {
  return TIMES.map((time) => ({
    time,
  }));
}

const toUp(s:string)=>
  return [s[0].toUpperCase(),s.slice(1)]


export default function HiTime({ params }: Props) {
  const { time } = params;
  return <>Good {[time[0].toUpperCase(),[...time.splice(1)]].join('')}!</>;
}
