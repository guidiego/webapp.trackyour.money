import React, { createContext, useContext, useState, useCallback } from "react";

const ctx = createContext({
  modal: null,
  filters: {},
  onClose: null,
  openAddEntryModal: null,
  openEntryFiltersModal: null,
  setFilters: null,
});

export const useModalName = () => {
  const { modal } = useContext(ctx);
  return modal;
};

export const useModalActions = () => {
  const { openAddEntryModal, openEntryFiltersModal, onClose } = useContext(ctx);

  return { openAddEntryModal, openEntryFiltersModal, onClose };
};

export const EntryContext: React.FC = ({ children }) => {
  const [modal, setModal] = useState(null);
  const [filters, setFilters] = useState({});

  const openAddEntryModal = useCallback(() => {
    setModal("addEntry");
  }, []);

  const openEntryFiltersModal = useCallback(() => {
    setModal("entryFilters");
  }, []);

  const onClose = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <ctx.Provider
      value={{
        filters,
        modal,
        onClose,
        openAddEntryModal,
        openEntryFiltersModal,
        setFilters,
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default EntryContext;
