import React from 'react';
import style from './PageControls.module.scss';

type PageControlsProps = {
  currentPage: number;
  setCurrentPage: any;
};

export function PageControls({
  currentPage,
  setCurrentPage,
}: PageControlsProps) {
  const GROUP_LENGTH = 30;

  const setPrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const setFirstPage = () => {
    setCurrentPage(0);
  };

  const setNextPage = () => {
    if (currentPage < GROUP_LENGTH - 1) setCurrentPage(currentPage + 1);
  };

  const setLastPage = () => {
    if (currentPage < GROUP_LENGTH - 1) setCurrentPage(GROUP_LENGTH - 1);
  };

  return (
    <div className={style.pageControls}>
      <button
        className={[style.btn, style.btn_firstPage].join(' ')}
        onClick={setFirstPage}
        disabled={currentPage === 0}
      />
      <button
        className={[style.btn, style.btn_prevPage].join(' ')}
        onClick={setPrevPage}
        disabled={currentPage === 0}
      />
      <div>{currentPage + 1}/30</div>
      <button
        className={[style.btn, style.btn_nextPage].join(' ')}
        onClick={setNextPage}
      />
      <button
        className={[style.btn, style.btn_lastPage].join(' ')}
        onClick={setLastPage}
      />
    </div>
  );
}
