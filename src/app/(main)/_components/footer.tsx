export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-6 px-4">
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MilkyWay. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
