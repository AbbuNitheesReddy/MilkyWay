export function MilkyWayLogo() {
  return (
    <div className="flex items-center gap-2" aria-label="MilkyWay Logo">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M12 2C8.68629 2 6 4.68629 6 8C6 11.3137 12 22 12 22C12 22 18 11.3137 18 8C18 4.68629 15.3137 2 12 2Z"
          fill="currentColor"
        />
        <path
          d="M12 8C11.1716 8 10.5 7.32843 10.5 6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5C13.5 7.32843 12.8284 8 12 8Z"
          fill="hsl(var(--card))"
        />
      </svg>
      <span className="font-headline text-xl font-bold text-foreground">
        MilkyWay
      </span>
    </div>
  );
}
