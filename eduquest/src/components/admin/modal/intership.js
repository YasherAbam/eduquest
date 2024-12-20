import React from 'react';
import './internship.css';

const Modal = ({ isOpen, onClose, title, internshipData }) => {
    if (!isOpen) return null;

    const requestLetters = Array.isArray(internshipData.requestLetters) ? internshipData.requestLetters : [];
    const compliance = Array.isArray(internshipData.compliance) ? internshipData.compliance : [];

    return (
        <div className="internship-modal-overlay">
            <div className="internship-modal-content">
                <div className="internship-modal-header">
                    <h4>{title}</h4>
                    <button className="internship-close-button" onClick={onClose}>×</button>
                </div>
                <div className="internship-modal-body">
                    <div className="internship-modal-columns">
                        {/* Request Letter Column */}
                        <div className="internship-modal-column">
                            <h4>Request Letter</h4>
                            {requestLetters.map((request, index) => (
                                <div key={index} className="department-item">
                                    <div className="department-info">
                                        <div className="department-icon">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <span>{request.department}</span>
                                    </div>
                                    <span className="date-info">{request.date}</span>
                                    <span className={`status-badge status-${request.status.toLowerCase()}`}>
                                        {request.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Compliance Column */}
                        <div className="internship-modal-column">
                            <h4>Compliance of Requirements</h4>
                            {compliance.map((complianceItem, index) => (
                                <div key={index} className="department-item">
                                    <div className="department-info">
                                        <div className="department-icon">
                                            <i className="fas fa-file-alt"></i>
                                        </div>
                                        <span>{complianceItem.department}</span>
                                    </div>
                                    <span className="date-info">{complianceItem.date}</span>
                                    <span className={`status-badge status-${complianceItem.status.toLowerCase()}`}>
                                        {complianceItem.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;