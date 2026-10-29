import { useEffect, useState } from "react";

const LOCALES = { en: "en-US", pt: "pt-BR" } as const;
const untilNextMinute = () => 60_000 - (Date.now() % 60_000);
const TIME_ZONE = "America/Sao_Paulo";

//pt: "14:32"   en: "2:32 PM"
//Atualiza sozinha, sempre na virada do minuto
export function useLocalTime(language: string): string {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const tick = () => {
            setNow(new Date());
            timer = setTimeout(tick, untilNextMinute());
        };

        timer = setTimeout(tick, untilNextMinute());
        return () => clearTimeout(timer);
    }, []);

    const locale = LOCALES[language as keyof typeof LOCALES] ?? LOCALES.en;
    return new Intl.DateTimeFormat(locale, {
        hour: "numeric",
        minute: "2-digit",
        timeZone: TIME_ZONE,
    }).format(now);
}

export function getBrazilDate(now: Date = new Date()): Date {
    return new Date(now.toLocaleString("en-US", { timeZone: TIME_ZONE }));
}

const STATUS = {
    en: { 
        asleep: "Probably asleep", 
        morning: "Starting the day", 
        working: "At work",
        studying: "Studying",
        available: "Available", 
        lunch: "Having lunch", 
        gym: "Probably at the gym",
        offline: "Off the clock",
    },
    pt: { 
        asleep: "Provavelmente dormindo", 
        morning: "Começando o dia", 
        working: "No trabalho",
        studying: "Estudando",
        available: "Disponível", 
        lunch: "Almoçando", 
        gym: "Provavelmente na academia",
        offline: "Fora do expediente", 
    },
};

export function getStatusByLocalTime(language: string, now: Date = new Date()): string {
    const t = STATUS[language as "en" | "pt"] ?? STATUS.en;
    const br = getBrazilDate(now);

    const minutes = br.getMinutes();
    const hours = br.getHours();
    const day = br.getDay();

    if (day > 0 || day < 6){ //monday to friday
        if(((hours >= 23) && (minutes > 30)) || ((hours <= 7) && (minutes < 30))){
            return t.asleep;
        }else if(hours >= 22 && minutes >= 30){
            return t.offline;
        }else if(hours < 8){
            return t.morning;
        }else if(hours === 12 && minutes < 40){
            return t.lunch;
        }else if(hours < 14){
            return t.working;
        }

        if(day === 2){ // if tuesday
            if(hours >= 17){
                return t.studying;
            }
        }else{
            if(hours >= 17){
                return t.gym;
            }else if(hours > 19){
                return t.studying;
            }
        }
        return t.available;
    }

    return "";
}