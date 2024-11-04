function formatAge(birthdate: string) : string{
    const birthDate = new Date(birthdate);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    if (years === 0) {
        if (months === 1) {
            return "1 месяц";
        } else if (months >= 2 && months <= 4) {
            return `${months} месяца`;
        } else {
            return `${months} месяцев`;
        }
    } else {
        if (months >= 6) {
            years += 1; 
        }

        if (years === 1) {
            return "1 год";
        } else if (years >= 2 && years <= 4) {
            return `${years} года`;
        } else {
            return `${years} лет`;
        }
    }
}

export {formatAge}