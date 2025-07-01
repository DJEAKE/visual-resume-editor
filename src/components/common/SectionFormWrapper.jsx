export default function SectionFormWrapper({ title, isCollapsed, setIsCollapsed, summary, children }) {
  if (isCollapsed) {
    return (
      <div>
        <h3>{title}</h3>
        <div style={{ color: "#555", marginTop: 4 }}>{summary}</div>
        <div className="form-actions-center">
          <button onClick={() => setIsCollapsed(false)} className="edit-btn">
            Редактировать
          </button>
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
}