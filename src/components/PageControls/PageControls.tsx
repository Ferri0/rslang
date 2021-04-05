import React from 'react';
import style from './PageControls.module.scss';

type PageControlsProps = {
  currentPage: number;
  setCurrentPage: any;
  maxPage?: number;
};

export function PageControls({
  currentPage,
  setCurrentPage,
  maxPage = 30,
}: PageControlsProps) {
  const GROUP_LENGTH = maxPage;

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
      <div>
        {currentPage + 1}/{GROUP_LENGTH}
      </div>
      <button
        className={[style.btn, style.btn_nextPage].join(' ')}
        onClick={setNextPage}
        disabled={currentPage === GROUP_LENGTH - 1}
      />
      <button
        className={[style.btn, style.btn_lastPage].join(' ')}
        onClick={setLastPage}
        disabled={currentPage === GROUP_LENGTH - 1}
      />
    </div>
  );
}
