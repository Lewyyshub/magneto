import { Suspense } from "react";
import UploadPageContent from "./UploadPageContent";

export default function UploadPage() {
  return (
    <Suspense fallback={<div>იტვირთება...</div>}>
      <UploadPageContent />
    </Suspense>
  );
}
