import React from 'react';
import style from './PageControls.module.scss';

type PageControlsProps = {
  currentPage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrentPage: any;
  maxPage?: number;
};

export function PageControls({
  currentPage,
  setCurrentPage,
  maxPage,
}: PageControlsProps): React.ReactElement {
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
        type="button"
        aria-label="go-to-first-page"
        className={[style.btn, style.btn_firstPage].join(' ')}
        onClick={setFirstPage}
        disabled={currentPage === 0}
      />
      <button
        type="button"
        aria-label="go-to-previous-page"
        className={[style.btn, style.btn_prevPage].join(' ')}
        onClick={setPrevPage}
        disabled={currentPage === 0}
      />
      <div>
        {currentPage + 1}/{GROUP_LENGTH}
      </div>
      <button
        type="button"
        aria-label="go-to-next-page"
        className={[style.btn, style.btn_nextPage].join(' ')}
        onClick={setNextPage}
        disabled={currentPage === GROUP_LENGTH - 1}
      />
      <button
        type="button"
        aria-label="go-to-last-page"
        className={[style.btn, style.btn_lastPage].join(' ')}
        onClick={setLastPage}
        disabled={currentPage === GROUP_LENGTH - 1}
      />
    </div>
  );
}

PageControls.defaultProps = {
  maxPage: 30,
};
