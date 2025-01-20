function Storage({ key, value }){

    const useLocalStorage = (key, initialValue) => {
        const data = useSyncExternalStore(
          (onChange) => {
            const onStorageEvent = (e) => {
              const customEvent = e;
              if (customEvent.detail.key === key) {
                onChange();
              }
            };
            window.addEventListener("storage", onChange);
            window.addEventListener(
              "local-storage-change",
              onStorageEvent
            );
            return () => {
              window.removeEventListener("storage", onChange);
              window.removeEventListener(
                "local-storage-change",
                onStorageEvent
              );
            };
          },
          () => {
            const data = localStorage.getItem(key);
            return data || initialValue;
          },
          () => initialValue
        );
      
        const setData = useCallback(
          (value) => {
            localStorage.setItem(key, value);
            window.dispatchEvent(
              new CustomEvent("local-storage-change", { detail: { key } })
            );
          },
          [key]
        );
      
        return [data, setData];
      };
      
}

export default Storage;